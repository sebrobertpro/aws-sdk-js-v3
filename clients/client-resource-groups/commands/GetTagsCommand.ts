import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient";
import { GetTagsInput, GetTagsOutput } from "../models/models_0";
import {
  deserializeAws_restJson1GetTagsCommand,
  serializeAws_restJson1GetTagsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetTagsCommandInput = GetTagsInput;
export type GetTagsCommandOutput = GetTagsOutput & __MetadataBearer;

export class GetTagsCommand extends $Command<
  GetTagsCommandInput,
  GetTagsCommandOutput,
  ResourceGroupsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceGroupsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTagsCommandInput, GetTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceGroupsClient";
    const commandName = "GetTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTagsInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetTagsOutput.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTagsCommandOutput> {
    return deserializeAws_restJson1GetTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
