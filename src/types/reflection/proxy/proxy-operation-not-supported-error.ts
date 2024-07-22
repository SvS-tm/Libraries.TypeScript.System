import { isNotEmpty } from "guards/is-not-empty";
import { ProxyOperation } from "types/reflection/proxy/proxy-operation";

export class ProxyOperationNotSupportedError extends Error
{
    public readonly parameters: readonly any[];

    public constructor(operation: ProxyOperation, parameters: readonly any[])
    {
        const messageBuilder = [
            "Operation is not supported by async lazy proxy: ",
            operation,
            "\r\nParameters:"
        ];

        for(const parameter of parameters)
        {
            messageBuilder.push(`\r\n`);
            
            if (isNotEmpty(parameter))
            {
                try
                {
                    messageBuilder.push(String(parameter));
                }
                catch
                {
                    messageBuilder.push("[unknown]");
                }
            } 
            else
                messageBuilder.push("[empty]");
        }

        super(messageBuilder.join(""));

        this.parameters = parameters;
    }
}
