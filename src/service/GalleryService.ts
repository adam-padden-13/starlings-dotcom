import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage"

const storage = getStorage()

export const fetchPhotoUrls = async () => {
  const folderRef = ref(storage, "photos/carousel")
  const result = await listAll(folderRef)

  const urls = await Promise.all(
    result.items.map((itemRef) => getDownloadURL(itemRef))
  )

  return urls
}
