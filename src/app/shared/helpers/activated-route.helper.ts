import { ActivatedRoute } from "@angular/router";

export class ActivatedRouteHelper {
    public static getParamFromActivatedRoute(activatedRoute: ActivatedRoute, paramName:string): string | null {
        if (activatedRoute.snapshot.paramMap.has(paramName)) {
            return activatedRoute.snapshot.paramMap.get(paramName)!;
        }

        if (activatedRoute.parent) {
            return this.getParamFromActivatedRoute(activatedRoute.parent, paramName);
        }

        return null;
    }
}
