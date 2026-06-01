import { defineStore } from "pinia"
import type { alterationToken } from "../composables/applyCreateAction"
import { useApplyCreateAction } from "../composables/applyCreateAction"
import { el } from "vuetify/locale"

interface HistoryToken {
  forwardToken: alterationToken
  reverseToken: alterationToken | alterationToken[]
}

export const useAlterationLogStore = defineStore("alterationLog", () => {
  const applyCreateAction = useApplyCreateAction()

  const undoStack: HistoryToken[] = []
  const redoStack: HistoryToken[] = []

  const saveState = (newState: HistoryToken) => {
    undoStack.push(newState)
    redoStack.length = 0
  }

  const undo = () => {
    if (undoStack.length === 0) return
    const current = undoStack.pop()
    if (!current) return
    redoStack.push(current)
    if (current.reverseToken instanceof Array) {
      current.reverseToken.forEach((token) => {
        applyCreateAction.alterationData(token)
      })
    } else {
      applyCreateAction.alterationData(current.reverseToken)
    }
  }
  const redo = () => {
    if (redoStack.length === 0) return
    const next = redoStack.pop()
    if (!next) return
    undoStack.push(next)
    applyCreateAction.alterationData(next.forwardToken)
  }



  return {
    undoStack,
    redoStack,
    saveState,
    undo,
    redo,
  }
})


