import path from 'path'
import fs from 'fs-extra'

export const writeFile = async (
  dest: string,
  data: string,
): Promise<{ status: 'ok'; path: string } | { status: 'err'; message: string }> => {
  const output = path.resolve(process.cwd(), dest)

  try {
    fs.ensureFileSync(output)
    fs.writeFileSync(output, data)

    return { status: 'ok', path: output }
  } catch (err) {
    return { status: 'err', message: err.message }
  }
}

export const writeFlatDir = async (
  dir: string,
  data: {
    [filename: string]: string
  },
): Promise<{ status: 'ok'; dir: string } | { status: 'err'; message: string }> => {
  const base = path.resolve(process.cwd(), dir)

  try {
    fs.ensureDirSync(base)

    await Promise.all(
      Object.entries(data).map(([filename, filedata]) =>
        fs.writeFile(path.resolve(base, filename), filedata),
      ),
    )

    return { status: 'ok', dir: base }
  } catch (err) {
    return { status: 'err', message: err.message }
  }
}

export const readFile = async (
  source: string,
): Promise<{ status: 'ok'; file: string } | { status: 'err'; message: string }> => {
  const input = path.resolve(process.cwd(), source)
  let file: string

  try {
    file = await fs.readFile(input, 'utf-8')
    return { status: 'ok', file }
  } catch (err) {
    return { status: 'err', message: err.message }
  }
}
