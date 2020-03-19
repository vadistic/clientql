import { defaultGeneratorConfig, GeneratorConfig } from '@clientql/generator'
import { readFile } from './read-write'

export const getConfig = async (path?: string): Promise<Partial<GeneratorConfig>> => {
  if (!path) {
    return {}
  }

  const res = await readFile(path)

  if (res.status === 'err') {
    console.error(`Could not read config file from ${path}`)
    console.error(res.message)
    console.log('Fallback to default')
    return defaultGeneratorConfig
  } else {
    const config = JSON.parse(res.file)
    const validation = validateConfig(config)

    if (validation.status === 'err') {
      console.error(validation.message)
      console.log('Fallback to default')
      return defaultGeneratorConfig
    }

    return config
  }
}

const validateConfig = (config: any): { status: 'ok' } | { status: 'err'; message: string } => {
  if (typeof config !== 'object') {
    return {
      status: 'err',
      message: 'Provided config was not an object?',
    }
  }

  for (const key of Object.keys(config)) {
    if (!(key in defaultGeneratorConfig)) {
      return {
        status: 'err',
        message: `Invalid configuration option: ${key}`,
      }
    }
  }

  return {
    status: 'ok',
  }
}
