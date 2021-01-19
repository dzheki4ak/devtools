// экспортируйте printProfile как именной export

export const printProfile = profileData => {
     console.log('implementation for printProfile');
     const { name, from } = profileData;
     console.log(`${name} from ${from}`);   
 };