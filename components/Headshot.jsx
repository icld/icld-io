import Image from 'next/image';
import pic from '/public/images/IMG_3817.jpg';
export default function () {
  return (
    <div>
      <Image alt='ian' src={pic} />
    </div>
  );
}
