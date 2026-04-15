import imageUrlBuilder from "@sanity/image-url";
import { client, sanityEnabled } from "./sanity";

const builder = sanityEnabled ? imageUrlBuilder(client as any) : null;

export function urlFor(source: any) {
  if (!builder) {
    return {
      url: () => "",
    } as const;
  }

  return builder.image(source);
}