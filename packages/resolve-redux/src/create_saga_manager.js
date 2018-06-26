import { fork, cancel } from 'redux-saga/effects'

const createSagaManager = () => {
  const sagas = {}

  return {
    *start(key, saga, ...sagaArgs) {
      console.log(key, saga, ...sagaArgs)

      if (!Array.isArray(sagas[key])) {
        sagas[key] = []
      }
      const sagaId = yield fork(saga, ...sagaArgs)

      sagas[key].push(sagaId)

      return sagaId
    },
    *stop(key) {
      if (Array.isArray(sagas[key])) {
        for (const sagaId of sagas[key]) {
          yield cancel(sagaId)
        }
      }

      delete sagas[key]
    }
  }
}

export default createSagaManager
