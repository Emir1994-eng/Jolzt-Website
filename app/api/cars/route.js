import axios from 'axios';

const API = process.env.NEXT_PUBLIC_JOLZT_API;

export async function POST(req) {
    try {
        const { query = {}, action } = await req.json();
        let response;

        switch (action) {
            case 'getCars':
                // Use params instead of string concatenation
                response = await axios.get(`${API}/api/v1/car/query/data`, {
                    params: query
                });
                break;
            default:
                return new Response(JSON.stringify({ error: 'Invalid action type' }), {
                    status: 400,
                });
        }

        return Response.json(response.data);
    } catch (error) {
        console.error('API Error:', error);
        return Response.json(
            { error: error.response?.data?.message || 'Internal server error' },
            { status: error.response?.status || 500 }
        );
    }
}