import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { firstName, lastName, email, company, message } = await req.json() as ContactFormData

    // First, search for existing contact by email
    const searchResponse = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Deno.env.get('HUBSPOT_API_KEY')}`,
      },
      body: JSON.stringify({
        filterGroups: [{
          filters: [{
            propertyName: 'email',
            operator: 'EQ',
            value: email
          }]
        }]
      })
    });

    const searchData = await searchResponse.json();
    console.log('Search response:', searchData);

    const contactProperties = {
      properties: {
        firstname: firstName,
        lastname: lastName,
        email: email,
        company: company,
        message: message || ''
      }
    };

    let response;
    let data;

    // If contact exists, update it
    if (searchData.total > 0) {
      const contactId = searchData.results[0].id;
      console.log('Updating existing contact:', contactId);
      
      response = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Deno.env.get('HUBSPOT_API_KEY')}`,
        },
        body: JSON.stringify(contactProperties),
      });
    } else {
      // Create new contact if doesn't exist
      console.log('Creating new contact');
      response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Deno.env.get('HUBSPOT_API_KEY')}`,
        },
        body: JSON.stringify(contactProperties),
      });
    }

    data = await response.json();
    console.log('HubSpot API response:', data);

    if (!response.ok) {
      throw new Error(data.message || 'Failed to handle contact in HubSpot');
    }

    return new Response(
      JSON.stringify({ success: true, data }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        } 
      }
    );

  } catch (error) {
    console.error('Error processing contact:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Internal server error' 
      }),
      { 
        status: 200, // Changed to 200 to handle all cases gracefully
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        } 
      }
    );
  }
})