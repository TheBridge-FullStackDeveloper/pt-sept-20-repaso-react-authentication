import { useForm } from 'react-hook-form';
import { useUser } from '../context/User';
import { postLogin } from '../services/auth';

export default function Login() {
  const { login } = useUser();
  const { register, handleSubmit } = useForm();

  function handleFormSubmit({ email, password }) {
    login(email, password);
  }

  return (
    <div>
      <h2>Login ⁇</h2>

      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: true,
          })}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register('password', {
            required: true,
          })}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
