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
		emailService.sendEmail("eliana.dm@outlook.com", "teste de email subject", "oi amor");
		return "Email enviado com sucesso";
	}
	

}
