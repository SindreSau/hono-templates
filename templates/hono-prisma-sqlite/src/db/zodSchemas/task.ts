import * as z from "zod"

export const taskModel = z.object({
  /**
   * Unique identifier for the task
   */
  id: z.number().int(),
  /**
   * The name of the task
   */
  name: z.string().max(18, { message: "Task name must be less than 18 characters" }),
  /**
   * Whether or not the task is completed
   */
  completed: z.boolean(),
  /**
   * When the task was created
   */
  createdAt: z.date(),
  /**
   * When the task was last updated
   */
  updatedAt: z.date(),
})
