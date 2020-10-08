import { AppError, AppErrorType } from "./AppError"

class ExceptionValidation {

  public existsOrError(value: any, msg: string) {
    let valid: boolean = false

    if (!value)
      valid = true

    if (Array.isArray(value) && value.length === 0)
      valid = true

    if (typeof value === 'string' && !value.trim())
      valid = true

    if (valid) {
      throw new AppError(
        {
          status: 400,
          type: AppErrorType.INVALID_PARAMETER,
          userMessage: msg
        }
      )
    }

    return this
  }

  public notExistsOrError(value: any, msg: string) {
    try {
      this.existsOrError(value, msg)
      return this
    } catch (msg) {
      throw new AppError(
        {
          status: 400,
          type: AppErrorType.INVALID_PARAMETER,
          userMessage: msg
        }
      )
    }
  }

  public equalsOrError(valueA: any, valueB: any, msg: string) {
    if (valueA !== valueB) {
      throw new AppError(
        {
          status: 400,
          type: AppErrorType.INVALID_PARAMETER,
          userMessage: msg
        }
      )
    }

    return this
  }

}

export const validation = new ExceptionValidation()
