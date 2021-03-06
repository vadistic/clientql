// Code generated by Prisma (prisma@1.30.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/
import { makePrismaClientClass } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";
/**
 * Model Metadata
 */
export const models = [
    {
        name: "Post",
        embedded: false
    },
    {
        name: "User",
        embedded: false
    },
    {
        name: "Thread",
        embedded: false
    },
    {
        name: "Board",
        embedded: false
    }
];
/**
 * Type Defs
 */
export const Prisma = makePrismaClientClass({
    typeDefs,
    models,
    endpoint: `https://eu1.prisma.sh/vadistic/graphql-clientgen/dev`
});
export const prisma = new Prisma();
