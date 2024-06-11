package br.com.agrokelvy.api_javaemail.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import br.com.agrokelvy.api_javaemail.service.EmailService;

@Controller
public class EmailController {
	
	private EmailService emailService = null;
	
	public EmailController(EmailService emailService) {
		this.emailService = emailService;
	}
	
	@GetMapping("/send-email")
	public String sendEmail() {
		emailService.sendEmail("sergiofeitosa@live.com", "teste de email subject", "teste mensagem");
		return "Email enviado com sucesso";
	}
	

}
