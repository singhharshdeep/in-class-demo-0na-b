import { lazy } from "react";

const Favorites =  lazy(() => import("@/components/Favorites"));

export default function FavoritesPage() {
  return <Favorites />
}