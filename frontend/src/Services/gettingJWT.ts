import { type FormObj } from '../Utils/types';

async function gettingJWT(formObj: FormObj, URL: string): Promise<string | null> {
    try {
      const response = await fetch(URL, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formObj),
      });

    if (!response.ok) {
        console.log(response);
        return null;
    }

    const data = await response.json();
    console.log(data);
    console.log(data.jwt);

    if(data){
        return data.jwt;
    }
    return null;

  } catch (error: unknown) {
    console.log(error);
    return null;
  }
}

export default gettingJWT;
