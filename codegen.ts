import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: {
    [process.env.GRAFBASE_API_URL!]: {
      headers: {
        'x-api-key': process.env.GRAFBASE_API_KEY!
      }
    }
  },
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/gql/': {
      preset: 'client',
      config: {
        documentMode: 'string'
      }
    }
  },
  hooks: { afterAllFileWrite: ['prettier --write'] }
}

export default config
