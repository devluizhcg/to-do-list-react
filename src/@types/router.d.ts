// router.d.ts
import type { RouteObject } from "react-router-dom";

type BaseRouteObject = Omit<RouteObject, "path" | "Component">;

export type RouteObjectWithRequiredPath = {
	path: string;
} & Partial<BaseRouteObject>;
export declare const ROUTE_NAMES_ARRAY: readonly ["HOME", "TASK", "ABOUT"];

export type TRouteNames = (typeof ROUTE_NAMES_ARRAY)[number];
export declare const REROUTES: Record<TRouteNames, RouteObjectWithRequiredPath>;

// Se você precisar do array de nomes para iteração:
export declare const ROUTE_NAME_ARRAY: typeof ROUTE_NAMES_ARRAY;
