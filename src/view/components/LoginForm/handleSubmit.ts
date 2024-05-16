import { FormEvent } from 'react';

function handleSubmit(e: FormEvent<HTMLFormElement>): object {
  e.preventDefault();

  const form = e.currentTarget;
  const data = new FormData(form);

  // console.log(Object.fromEntries(data.entries()));
  form.reset();

  return data;
}

export default handleSubmit;
