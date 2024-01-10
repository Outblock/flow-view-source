import * as fcl from "@onflow/fcl"
import {useEffect} from "react"
import {send} from "@onflow/transport-http"

export function CrescendoConfig() {
  useEffect(() => {
    fcl
      .config()
      .put("env", "crescendo")
      .put("flow.network", "crescendo")
      .put("accessNode.api", "https://rest-crescendo.onflow.org")
      .put("sdk.transport", send)
      .put("discovery.wallet", "https://fcl-discovery.onflow.org/crescendo/authn")
      .put("fcl.eventsPollRate", 2500)
      .put("0xLockedTokens", "0x95e019a17d0e23d7")
      .put("0xFungibleToken", "0x9a0766d93b6608b7")
  }, [])
  return null
}
