import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
  private dogs = [
    {
      name: 'Golden Retriever',
      playfulness: 4,
      min_life_expectancy: 10,
      max_life_expectancy: 12,
      image_link: 'https://api-ninjas.com/images/dogs/golden_retriever.jpg',
    },
    {
      name: 'Cocker Spaniel',
      playfulness: 3,
      min_life_expectancy: 10,
      max_life_expectancy: 14,
      image_link: 'https://api-ninjas.com/images/dogs/cocker_spaniel.jpg',
    },
    {
      name: 'Pug',
      min_life_expectancy: 13,
      max_life_expectancy: 15,
      playfulness: 5,
      image_link: 'https://api-ninjas.com/images/dogs/pug.jpg',
    },
    {
      name: 'Doberman Pinscher',
      min_life_expectancy: 10,
      max_life_expectancy: 12,
      playfulness: 4,
      image_link: 'https://api-ninjas.com/images/dogs/doberman_pinscher.jpg',
    },
    {
      name: 'Staffordshire Bull Terrier',
      min_life_expectancy: 12,
      max_life_expectancy: 14,
      playfulness: 4,
      image_link:
        'https://api-ninjas.com/images/dogs/american_staffordshire_terrier.jpg',
    },
    {
      name: 'Dachshund',
      min_life_expectancy: 12,
      max_life_expectancy: 16,
      playfulness: 4,
      image_link: 'https://api-ninjas.com/images/dogs/dachshund.jpg',
    },
  ];

  getDogs() {
    return this.dogs;
  }
}
