// Core fetcher added by CommerceProvider
export type Fetcher<T> = (options: FetcherOptions) => T | Promise<T>

export type FetcherOptions<Body = any> = {
  url?: string
  query?: string
  method?: string
  variables?: any
  body?: Body
}

export type HookFetcher<Data, Input = null, Result = any> = (
  options: HookFetcherOptions | null,
  input: Input,
  fetch: <T = Result, Body = any>(options: FetcherOptions<Body>) => Promise<T>
) => Data | Promise<Data>

export type HookFetcherOptions = {
  query?: string
  url?: string
  method?: string
}

export type HookInput = [string, string | number | boolean | undefined][]

export type Override<T, K> = Omit<T, keyof K> & K
