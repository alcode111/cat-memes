import { catsData } from '/data.js'

function getEmotionsArray(cats) {
    const emotionsArray = []

    for (let cat of cats) {
        for (let emotion of cat.emotionTags) {
            emotionsArray.push(emotion)
        }
    }
    return emotionsArray
}