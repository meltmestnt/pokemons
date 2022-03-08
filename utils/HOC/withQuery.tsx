import React from "react";
import { UseQueryResult } from "react-query";
import Loader from "react-spinners/HashLoader";

export const withQuery = <T extends object, >(Component: (props: T) => JSX.Element, propName = "data") => {
  return function WithQuery<D>({ response, ...rest }: Partial<T> & { response: UseQueryResult<D> }) {
    const { isLoading, data } = response;

    if (isLoading) return <Loader color='white' size={35} />

    if (!data) return null;

    const props = {
      ...rest,
      [propName]: data
    }

    return <Component {...(props as T)} />
  }
}