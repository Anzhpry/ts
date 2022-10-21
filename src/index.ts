import { Book } from "./book"
import { books } from "./book-collection"


function findSuitableBook(
    genre: string,
    pagesLimit: number,
    multipleRecommendations = true
): Book | Book[] | undefined {
    const findAlgorithm = (book: Book) => {
        return book.genre === genre && book.pageAmount <= pagesLimit;
    };
    if (multipleRecommendations) {
        return books.filter(findAlgorithm);
    } else {
        return books.find(findAlgorithm);
    }
}

const recommendBook = findSuitableBook("fantasy", 1000);
if (recommendBook instanceof Book) {
    console.log(recommendBook)
} else {
    console.log(recommendBook && recommendBook[0].name)
}
