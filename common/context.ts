'use client'
import { createContext } from "react";
import { BlogContextType } from "@/typings";
export const blogContext = createContext<BlogContextType>({ posts: [] });
