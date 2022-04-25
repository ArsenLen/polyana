<div class="footer"> 
  <div class="footer-contacts">
      <div class="item-contact">
          <div class="row-icon">
              <img src="img/icon/location.svg" alt="" class="icon">
              <p class="text">Санкт-Петербург, проспект Тореза, 89</p>
          </div>
      </div>      
      <div class="item-contact">
          <div class="h4">Ресторан:</div>
          <a href="tel:+78129123123" class="phone">+7 (812) 9-123-123</a> 
      </div>
      <div class="item-contact">
          <div class="h4">Доставка еды:</div> 
          <a href="tel:+78129898979" class="phone">+7 (812) 989-89-79  </a>
      </div>      
      <!-- <div class="text text-info">Требуются уточнения?<br>
Пожалуйста, оставьте свой телефон!<br>
Наша служба заботы о клиентах свяжется
с Вами и ответит на любые вопросы.</div>       -->
      <div class="item-contact">
          <div class="h4">Время работы ресторана:</div>
          <div class="row-icon">
              <img src="img/icon/clock.svg" alt="" class="icon">
              <p class="text">12:00-23:00</p>
          </div>
      </div> 
      <div class="item-contact">
          <div class="h4">Время работы доставки еды:</div>
          <div class="row-icon">
              <img src="img/icon/clock.svg" alt="" class="icon">
              <p class="text">12:00-23:00</p>
          </div>
          <div class="row-icon email">
              <img src="img/icon/email.svg" alt="" class="icon">
              <a href="mailto:" class="text">polyana.restoran@gmail.com</a>
          </div>          
      </div>    
      <ul class="socials">
          <li><a href="https://www.instagram.com/polyana_restoran/"><img src="img/icon/instagram.svg" alt=""></a></li>
          <li><a href="https://vk.com/mypolyana"><img src="img/icon/vk.svg" alt=""></a></li>
      </ul>        
  </div>  
  <form class="order-table" id="form">

      <div class="title h3">Забронировать стол</div>

      <div class="row-field">
        <div class="form-field-input">
            <label class="form-field-title static">Дата</label>
            <img src="img/icon/calendar.svg" alt="" class="icon">
            <input type='text' class="date-input"  required
                name="date"
                data-position="top left" 
                data-language='ru' 
                placeholder="23.12.2021" />
        </div>
      <div class="form-field-input">
          <label class="form-field-title static">Время</label>
          <img src="img/icon/clock.svg" alt="" class="icon">
          <input type="text" class="input" name="time" required>
      </div>   
      </div>
      
      <div class="form-field-input">
          <img src="img/icon/profile-2user.svg" alt="" class="icon">
          <label class="form-field-title">Количество гостей</label>
          <div class="number-count-field">
              <div class="button dec"><img src="img/icon/minus.svg" alt=""></div>
              <input type="text" value="1" name="count" readonly class="input-number">
              <div class="button inc"><img src="img/icon/plus.svg" alt=""></div>
          </div>
      </div>       
      <div class="form-field-input">
          <img src="img/icon/profile.svg" alt="" class="icon">
          <input type="text" class="input" name="name" placeholder="Имя и фамилия" required>
      </div>
      <div class="form-field-input">
          <img src="img/icon/call.svg" alt="" class="icon">
          <input type="tel" class="input" name="phone" placeholder="Номер телефона" required>
      </div>  
   
      <div class="form-field-select">
        <select class="SelectBox" tabindex="-1" name="hall">
            <option selected disabled value="">Пожелания</option>
            <option value="Терраса">Терраса</option>
            <option value="Французкий">Французкий</option>
            <option value="Русский">Русский</option>
            <option value="Английский">Английский</option>
        </select>          
      </div>    
 
 
        
   <button class="btn"  type="submit">Забронировать</button>
</form>
<!-- <a href="https://yandex.ru/maps/?rtext=~55.659173,37.762848">Построить маршрут в Яндекс.Карты</a> -->
  <div class="map" id="map"> 
      <a target="_blank" 
      href="https://30488.redirect.appmetrica.yandex.com/show_point_on_map?appmetrica_tracking_id=745803332332869252&amp;desc=«Поляна» – живописный семейный ресторан&amp;lang=ru&amp;lat=60.026051&amp;lon=30.324905" 
      class="btn" >Маршрут</a>
      <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Afcb51de9037c0c75acac37eb40b0ae11de06f1d4badb5c6a6dca130c91cc3b7c&amp;width=100%25&amp;height=538&amp;lang=ru_UA&amp;scroll=true"></script>
  </div>
</div>

 
 