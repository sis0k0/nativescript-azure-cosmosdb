import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const { id, name, role } = req.body;
    const newPlayer = { id, name, role };

    const oldPlayer = context.bindings.playerDocumentIn
        .find(p => p.id === id);

    context.bindings.playerDocument = { ...oldPlayer, ...newPlayer };

    context.done();

    context.res = {
        body: "Record updated!",
    };
};

export default httpTrigger;
