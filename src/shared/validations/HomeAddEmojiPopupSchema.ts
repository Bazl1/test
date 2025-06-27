import * as yup from "yup";

import { REQUIRED_FIELD } from "@/shared";

export const HomeAddEmojiPopupSchema = yup.object({
  message: yup.string().trim().required(REQUIRED_FIELD)
});

export type HomeAddEmojiPopupSchemaType = yup.InferType<
  typeof HomeAddEmojiPopupSchema
>;
