import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
} from "@reduxjs/toolkit/query";
import { LoveToken } from "./LoveToken";
import {
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
  SerializedError,
} from "@reduxjs/toolkit";
import { Category } from "./Category";
import { ReactNode } from "react";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";

export interface DataLoaderProps {
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
  data: LoveToken[] | LoveToken | Category[] | undefined;
  emptyMessage?: string;
  render: () => React.JSX.Element;
}

export interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export interface HeaderTwoProps {
  title: string;
}

export interface LabelsProps {
  labels: string[];
}

export interface CategoryButtonProps {
  category: string;
  selected: boolean;
  onClick: () => void;
  size: string;
}

export interface FormProps {
  onSubmit: UseFormHandleSubmit<FieldValues, FieldValues>;
  children: ReactNode;
  isLoading: boolean;
  callback:
    | MutationTrigger<
        MutationDefinition<
          any,
          BaseQueryFn<
            string | FetchArgs,
            unknown,
            FetchBaseQueryError,
            {},
            FetchBaseQueryMeta
          >,
          never,
          any,
          "userApi"
        >
      >
    | MutationTrigger<
        MutationDefinition<
          any,
          BaseQueryFn<
            string | FetchArgs,
            unknown,
            FetchBaseQueryError,
            {},
            FetchBaseQueryMeta
          >,
          never,
          any,
          "loveTokensApi"
        >
      >;
  successMessage: string;
  errorMessage: string;
  setNotification:
    | ActionCreatorWithPayload<{
        message: string;
        isSuccess: boolean;
      }>
    | ActionCreatorWithPayload<{
        message: string;
        isSuccess: boolean;
        uri?: string;
      }>;
  clearNotification: ClearNotificationAction;
  user?: {
    userName: string | null;
    userId: string | null;
  };
}

type ClearNotificationAction =
  | ActionCreatorWithoutPayload<"notification/clearRegisterNotification">
  | ActionCreatorWithoutPayload<"notification/clearLoginNotification">
  | ActionCreatorWithoutPayload<"notification/clearCreateLoveTokenNotification">;

export interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  register: UseFormRegister<FieldValues>;
  required: boolean;
  errors: FieldValues;
  options?: string[];
}

export interface FormNotificationProps {
  message: string;
  isSuccess: boolean;
}

export interface NavLinkProps {
  href: string;
  text: string;
}

export interface NavSectionProp {
  loggedUser: boolean;
}

export interface SubmitParams {
  callback: (data: any) => Promise<any>;
  setNotification: (notification: {
    message: string;
    isSuccess: boolean;
    uri?: string;
  }) => void;
  successMessage: string;
  errorMessage: string;
  clearNotification: () => void;
  user?: {
    userName: string | null;
    userId: string | null;
  };
}

export interface CategoriesState {
  selectedCategories: string[];
}

export interface SortState {
  sortBy: string;
  sortOrder: "asc" | "desc";
}

export interface NotificationState {
  register: {
    message: string | null;
    isSuccess: boolean;
  };
  login: {
    message: string | null;
    isSuccess: boolean;
  };
  createLoveToken: {
    message: string | null;
    isSuccess: boolean;
    uri?: string;
  };
}

export interface Notification {
  message: string | null;
  isSuccess: boolean;
  uri?: string;
}

export interface User {
  userId: string | null;
  role: string | null;
  userName: string | null;
  token: string | null;
}

export interface AuthState {
  updateAuthStatus: boolean;
}

export interface SectionLoveTokensPreview extends CategoriesState {}

export interface CategoriesSectionProps extends CategoriesState {
  handleCategorySelect: (category: string) => void;
}

export interface RootState {
  categories: CategoriesState;
  creationSort: SortState;
  notification: NotificationState;
  auth: AuthState;
}

export interface SortSettings {
  sortOrder: "newest" | "oldest";
}