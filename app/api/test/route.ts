export async function GET(req:Request) {
    const url = new URL(req.url);
    const query = url.searchParams.get('query');
    const data = {code:0,message:'hello world',data:query};
    return Response.json(data);
}