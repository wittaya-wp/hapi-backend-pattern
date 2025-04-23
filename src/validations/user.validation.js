const { z } = require('zod');

const createUserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format")
});

const updateUserSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Invalid email format").optional()
});

module.exports = {
  createUserSchema,
  updateUserSchema
};
