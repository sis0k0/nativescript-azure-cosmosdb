import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const { id, name, role } = req.body;

    const player = { id, name, role };

    // Creating the document
    context.bindings.playerDocument = JSON.stringify(player);

    // Saving the document
    context.done();
};

export default httpTrigger;
