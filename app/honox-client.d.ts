import type * as React from "react";

declare module "honox/client" {
	interface ClientOptions {
		hydrate?: (
			children: React.ReactElement,
			parent: Element,
		) => void | Promise<void>;
		createElement?: <P extends {}>(
			type: string | React.FunctionComponent<P> | React.ComponentClass<P>,
			props: P & React.Attributes,
			...children: React.ReactNode[]
		) => React.ReactElement<P> | Promise<React.ReactElement<P>>;
	}

	export function createClient(options?: ClientOptions): Promise<void>;
}
