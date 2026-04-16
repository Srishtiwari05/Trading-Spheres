import { createImageUrlBuilder } from "@sanity/image-url";
import { dataset, projectId, sanityEnabled } from "./sanity";

const builder = sanityEnabled && projectId && dataset ? createImageUrlBuilder({ projectId, dataset }) : null;

export function urlFor(source: any) {
  if (!builder) {
    return {
      url: () => "",
    } as const;
  }

  return builder.image(source);
}