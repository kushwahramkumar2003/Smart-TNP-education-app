import { useState, useEffect } from "react";

interface personReview {
  avatar: string;
  name: string;
  rating: number;
  date: Date;
}

interface reviewDistribution {
  star: number;
  totalGiven: number;
}

interface ReviewDataProp {
  totalReview: number;
  reviews: personReview[];
  starDistribution: reviewDistribution[];
}

const reviewData: ReviewDataProp = {
  totalReview: 30,
  starDistribution: [
    { star: 5, totalGiven: 5 },
    { star: 4, totalGiven: 20 },
    { star: 3, totalGiven: 5 },
    { star: 2, totalGiven: 0 },
    { star: 1, totalGiven: 0 },
  ],
  reviews: [
    { avatar: "", date: new Date(), name: "Pankaj prajapati", rating: 4 },
    { avatar: "", date: new Date(), name: "Ramkumar kushwah", rating: 4 },
    { avatar: "", date: new Date(), name: "Pawan pal", rating: 4 },
  ],
};

const AverageReview = () => {
  const [averageRating, setAverageRating] = useState<number>(0);

  useEffect(() => {
    const totalRatings = reviewData.reviews.reduce(
      (acc, curr) => acc + curr.rating,
      0
    );
    const average = totalRatings / reviewData.totalReview;
    setAverageRating(average);
  }, []);

  const renderStars = (averageRating: number) => {
    const totalStars = 5;
    const fullStars = Math.floor(averageRating);
    const hasHalfStar = averageRating % 1 !== 0;

    const stars = [];

    for (let i = 1; i <= fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-500 text-2xl">
          &#9733;
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key={stars.length + 1} className="text-yellow-500 text-2xl">
          &#9733;&#189;
        </span>
      );
    }

    const remainingStars = totalStars - stars.length;
    for (let i = 1; i <= remainingStars; i++) {
      stars.push(
        <span key={stars.length + 1} className="text-gray-500 text-2xl">
          &#9734;
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="flex flex-col gap-4 p-4 rounded-lg bg-white">
      <div className="flex flex-row gap-6 items-center justify-start">
        <div className="flex flex-col justify-evenly">
          <div className="flex flex-row justify-center items-end">
            <p className="text-3xl font-semibold">{averageRating.toFixed(1)}</p>
            <p className="text-gray-500 text-lg">/5.0</p>
          </div>
          <div className="flex flex-row gap-1">
            {renderStars(averageRating)}
          </div>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default AverageReview;
