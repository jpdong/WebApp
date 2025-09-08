export function GET(req:Request) {
    const data = {code:0,message:'hello world'};
    return Response.json(data);
}