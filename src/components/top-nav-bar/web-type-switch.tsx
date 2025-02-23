"use client";

import { cn } from "@/lib/utils";
import { HomeWebViewType } from "@/models/data";
import { setWebsiteState } from "@/redux/features/website-state-slice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export const WebTypeSwitch = () => {
  const websiteState = useSelector(
    (state: RootState) => state.website.currentView
  );
  const dispatch = useDispatch();

  return (
    <div className="bg-muted p-3 px-6 rounded-full flex flex-row gap-8 w-[250px] relative overflow-hidden">
      <div
        className={cn(
          "absolute z-0 bg-background w-[calc(50%-4px)] h-[calc(100%-4px)] top-[2px] rounded-full transition-all duration-300",
          websiteState === HomeWebViewType.dashboard
            ? "left-[2px]"
            : "left-[calc(50%+2px)]"
        )}
      ></div>
      <button
        className={cn(
          "w-1/2 z-10 transition-all duration-300",
          websiteState !== HomeWebViewType.dashboard
            ? "text-muted-foreground"
            : "text-foreground"
        )}
        onClick={() => dispatch(setWebsiteState(HomeWebViewType.dashboard))}
      >
        Dashboard
      </button>
      <button
        className={cn(
          "w-1/2 z-10 transition-all duration-300",
          websiteState !== HomeWebViewType.website
            ? "text-muted-foreground"
            : "text-foreground"
        )}
        onClick={() => dispatch(setWebsiteState(HomeWebViewType.website))}
      >
        Website
      </button>
    </div>
  );
};
