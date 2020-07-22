import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CircleSpinner } from "react-spinners-kit";

import { ModalNewRegister } from "../../components/Elements/Modal";
import { InputWithBorderLeft } from "../../components/Elements/Input";
import { validationInputForms } from "./../../utils/validations";
import { SectionRegister, ModalRegister } from "./styles";
import { createUser } from "./../../store/modules/user/actions";

import ImageArrowBack from "../../assets/arrow_back.png";
import ImageUser from "../../assets/login/user.png";
import { lowerCase } from "lodash";

export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [password, setPassword] = useState("");
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {},
  });
  const onSubmit = ({ nome, email, password }) => {
    const dataCriacao = new Date();
    const username = lowerCase(nome).replace(/\s/g, "_");
    dispatch(
      createUser({
        username,
        nome,
        email,
        password,
        dataCriacao,
      })
    );
  };
  const userCreated = useSelector((state) => state.user);

  const handleRegister = () => {
    const authenticatedUser = {
      idUsuario: userCreated.data.data.idUsuario,
      nome: userCreated.data.data.nome,
      email: userCreated.data.data.email,
      image: ImageUser,
    };
    localStorage.setItem(
      "authenticated_user",
      JSON.stringify(authenticatedUser)
    );
    history.push("/");
  };

  return (
    <>
      <ModalNewRegister
        success={userCreated.success}
        width={"750px"}
        height={"auto"}
        padding={"60px 80px 50px"}
        borderRadius={"10px"}
        titleModal={"Usuário cadastrado com Sucesso!"}
        textModal={
          "Você acaba de se cadastrar em nosso site! Clique no botão abaixo para prosseguir"
        }
        textButton={"Continuar"}
        widthButton={"300px"}
        heightButton={"50px"}
        onClick={handleRegister}
      />
      <SectionRegister>
        <ModalRegister>
          <div className="modal_welcome">
            <div className="companyName">
              <Link to={{ pathname: "/entrar" }}>
                <img src={ImageArrowBack} alt="" />
              </Link>
              <p className="companyName">MEAL RECEITAS</p>
            </div>

            <h4>Prazer em vê-lo novamente</h4>
            <h2>SEJA BEM-VINDO</h2>
            <hr />
            <p>
              Lorem ipsum fames etiam dapibus convallis nullam commodo dictum
              donec bibendum, luctus felis malesuada duis ac at cras dui
              bibendum. a lorem pharetra sodales venenatis volutpat commodo
              habitant sit, sem vivamus arcu enim aliquam suspendisse leo non,
              cursus
            </p>
          </div>
          <div className="modal_form">
            <h4>Crie sua conta</h4>
            <p>
              Lorem ipsum fames etiam dapibus convallis nullam commodo dictum
              donec bibendum, luctus felis malesuada duis ac at cras dui
              bibendum. a lorem pharetra sodales venenatis volutpat commodo
              habitant sit, sem vivamus arcu enim aliquam suspendisse leo non,
              cursus
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <InputWithBorderLeft
                name={"nome"}
                width={"100%"}
                height={"50px"}
                type={"text"}
                // autoComplete={"username"}
                background={"#F7F7F7"}
                borderLeft={"solid 7px #5E1B44"}
                placeholder={"Seu Nome"}
                forwardRef={register({ required: true })}
              />
              {validationInputForms(errors.nome, "Nome")}
              <InputWithBorderLeft
                name={"email"}
                width={"100%"}
                height={"50px"}
                type={"email"}
                autoComplete={"username"}
                background={"#F7F7F7"}
                borderLeft={"solid 7px #5E1B44"}
                placeholder={"Seu E-mail"}
                forwardRef={register({ required: true })}
              />
              {validationInputForms(errors.email, "E-mail")}
              <InputWithBorderLeft
                name={"password"}
                width={"100%"}
                height={"50px"}
                type={"password"}
                autoComplete={"new-password"}
                background={"#F7F7F7"}
                borderLeft={"solid 7px #5E1B44"}
                placeholder={"Sua Senha"}
                forwardRef={register({
                  required: true,
                  minLength: {
                    value: 8,
                    message: "Senha deve ter no mínimo 8 caracteres",
                  },
                })}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {validationInputForms(errors.password, "Senha")}
              <InputWithBorderLeft
                name={"confirm_password"}
                width={"100%"}
                height={"50px"}
                type={"password"}
                autoComplete={"new-password"}
                background={"#F7F7F7"}
                borderLeft={"solid 7px #5E1B44"}
                placeholder={"Confirme sua Senha"}
                forwardRef={register({
                  required: true,
                  minLength: {
                    value: 8,
                    message: "Senha deve ter no mínimo 8 caracteres",
                  },
                  validate: (value) => value === password,
                })}
              />
              {validationInputForms(errors.confirm_password, "Confirmar Senha")}

              <button type="submit">
                CADASTRAR
                {userCreated.loading && (
                  <CircleSpinner size={20} color={"#fff"} />
                )}
              </button>

              <p className="register">
                Já possui uma conta?
                <Link to={{ pathname: `/entrar` }}>
                  <span className="color_marsala"> Entrar</span>
                </Link>
              </p>
            </form>
          </div>
        </ModalRegister>
      </SectionRegister>
    </>
  );
}
