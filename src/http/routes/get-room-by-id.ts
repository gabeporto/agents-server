import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod';
import { db } from '../../db/connection.ts';
import { eq } from 'drizzle-orm';
import { schema } from '../../db/schema/index.ts';
import z from 'zod/v4';

export const getRoomRoute: FastifyPluginCallbackZod = (app) => {
    app.get('/rooms/:roomId', 
        {
            schema: {
                params: z.object({
                    roomId: z.string(),
                })
            },
        },
        async (request) => {
            const { roomId } = request.params;

            const result = await db
            .select({
                id: schema.rooms.id,
                name: schema.rooms.name,
                description: schema.rooms.description,
                createdAt: schema.rooms.createdAt,
            })
            .from(schema.rooms)
            .where(eq(schema.rooms.id, roomId));

            return result ? result[0] : null;
        }
    );
};