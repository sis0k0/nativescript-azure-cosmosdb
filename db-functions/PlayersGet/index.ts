import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log(context.bindings);
    const players = context.bindings.playerDocument;

    const response = players.reduce((response, player) => {
        response += `ID: ${player.id}, name: ${player.name}, position: ${player.role}\n`;

        return response;
    }, "");

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: response
    };
};

export default httpTrigger;
