<template>    
    <div>
       <h1>Cadastre-se</h1>
       <hr>

       <form>
            <div class="form-group col-sm-7">
                <label for="username">Nome de Usuário:</label>
                <input type="username" class="form-control" id="username">
            </div>
            <div class="form-group col-sm-7">
                <label for="password">Senha:</label>
                <input type="password" class="form-control" id="password">
            </div>
            <div class="form-group col-sm-7">
                <label for="email">E-mail:</label>
                <input type="email" class="form-control" id="email">
            </div>        
            <div class="form-group col-sm-7">
                <button type="submit" class="btn btn-primary">Criar Conta</button>
            </div>    
        </form>
    </div>
</template>

<script>
  export default {

  }
</script>