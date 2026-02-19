import TrainersClient from './TrainersClient';
import { getTrainers, type DbTrainer } from '@/lib/trainer-db';
import { getR2ImageUrl } from '@/lib/r2';

export { generateMetadata } from './metadata';

export default async function TrainersPage() {
  let trainerData: DbTrainer[];

  try {
    trainerData = await getTrainers();
  } catch {
    console.error('Error fetching trainers');
    trainerData = [];
  }

  const trainersWithImages = await Promise.all(
    trainerData.map(async (trainer) => ({
      ...trainer,
      image: await getR2ImageUrl(trainer.image),
    })),
  );

  return <TrainersClient trainers={trainersWithImages} />;
}
