import React from "react";
import { UseQueryResult } from "react-query";
import Loader from "react-spinners/HashLoader";

export const withQuery = <T extends object, D>(Component: (props: T) => JSX.Element, propName = "data") => {
  return function WithQuery({ response, ...rest }: Partial<T> & { response: UseQueryResult<D> }) {
    const { isLoading, data } = response;

    if (isLoading) return (
      <div className="w-full h-full flex items-center justify-center">
        <Loader color='white' size={64} />
      </div>
    )

    if (!data) return null;

    const props = {
      ...rest,
      [propName]: data
    }

    return <Component {...(props as T)} />
  }
}