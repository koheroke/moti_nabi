import { defineStore } from "pinia"
import type { alterationToken } from "../composables/applyCreateAction"
import { useApplyCreateAction } from "../composables/applyCreateAction"

interface HistoryToken {
  forwardToken: alterationToken
  reverseToken: alterationToken
}

export const useAlterationLogStore = defineStore("alterationLog", () => {
  const applyCreateAction = useApplyCreateAction()

  const undoStack: HistoryToken[] = []
  const redoStack: HistoryToken[] = []

  const saveState = (newState: HistoryToken) => {
    undoStack.push(newState)
    console.log("undo", undoStack)
    redoStack.length = 0
  }

  const undo = () => {
    console.log("undo", undoStack)

    if (undoStack.length === 0) return

    const current = undoStack.pop()
    if (!current) return

    redoStack.push(current)
    applyCreateAction.alterationData(current.reverseToken)
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