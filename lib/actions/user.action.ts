'use server'

import { CreateUserParams } from "@/types"
import { handleError } from "../utils"
import User from "../database/models/user"

export const createUser = async (user: CreateUserParams) => {
   try {
      const newUser = await User.create(user)

      return JSON.parse(JSON.stringify(newUser))
   } catch (error) {
      handleError(error)
   }
}