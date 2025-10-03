import './App.css';
import { type PropsWithChildren } from 'react';

interface PersonProps {
  name: string, 
  imageId: string
}

interface AvatarProps {
  person: PersonProps, 
  size?:  number
}

export function getImageUrl(person: PersonProps) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    '.jpg'
  );
}


function Avatar({person, size = 100}: AvatarProps) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({children} : PropsWithChildren) {
  return (
    <div className="card">
      <p>This is children of Card</p>
      {children}
    </div>
  );
}

export default function Profile() {
  return (
  <>
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
    </Card>
  </>
  );
}
